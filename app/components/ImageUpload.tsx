"use client";

import { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, ImageIcon, RefreshCw } from "lucide-react";

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [tokenizer, setTokenizer] = useState<any>(null);
  const [maxLength, setMaxLength] = useState<number>(20);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel("/model.json");
      setModel(loadedModel);

      const tokenizerData = await fetch("/tokenizer.json").then((res) => res.json());
      setTokenizer(tokenizerData);

      const maxLen = await fetch("/max_length.json").then((res) => res.json());
      setMaxLength(maxLen);
    };

    loadModel();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !model || !tokenizer) return;

    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);

    setCaption(null);

    const imageFeature = await extractImageFeature(file);
    const generatedCaption = generateCaption(model, tokenizer, imageFeature, maxLength);

    setCaption(generatedCaption);
  };

  const generateCaption = (model: tf.LayersModel, tokenizer: any, imageFeature: any, maxLength: number) => {
    let inText = "startseq";
    for (let i = 0; i < maxLength; i++) {
      const sequence = tokenizer.texts_to_sequences([inText])[0] || [];
      const paddedSequence = new Array(maxLength - sequence.length).fill(0).concat(sequence);

      const yPred = model.predict([tf.tensor([imageFeature]), tf.tensor([paddedSequence])]) as tf.Tensor;
      const wordIndex = yPred.argMax(-1).dataSync()[0];

      const word = tokenizer.index_word?.[wordIndex] || null;
      if (!word || word === "endseq") break;

      inText += " " + word;
    }
    return inText.replace("startseq", "").replace("endseq", "").trim();
  };

  const extractImageFeature = async (file: File) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    await new Promise((resolve) => (img.onload = resolve));

    const tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat();
    const normalizedTensor = tensor.div(tf.scalar(255)).expandDims(0);

    const featureModel = await mobilenet.load();
    const feature = await featureModel.infer(normalizedTensor, true);

    return feature.flatten().arraySync();
  };

  const handleNewImage = () => {
    setImage(null);
    setCaption(null);
  };

  return (
    <section id="image-upload" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Upload Your Image</h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <Input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-input" />
            <label
              htmlFor="image-input"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-purple-500 transition duration-300 ease-in-out"
            >
              {image ? (
                <img
                  src={image || "/placeholder.svg"}
                  alt="Uploaded"
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-7">
                  <Upload className="w-12 h-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-400">Drag and drop or click to upload</p>
                </div>
              )}
            </label>
          </div>
          {image && !caption && (
            <Button
              onClick={() => generateCaption}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mb-4"
            >
              Generate Caption
            </Button>
          )}
          {caption && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <ImageIcon className="mr-2" /> Generated Caption
              </h3>
              <p className="text-gray-300 mb-4">{caption}</p>
              <Button
                onClick={handleNewImage}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Select New Image
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
