// landing.tsx

import Card from "@/components/Card";
import Button from "@/components/Button"; // Import the Button component
import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>
      <Card />
      <Card />

      {/* Button Examples Section */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Button Component Examples</h2>

      {/* Button with different styles */}
      <div className="flex items-center space-x-4 mb-4">
        <Button title="Small Rounded" styles="px-2 py-1 text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="px-4 py-2 text-base rounded-md" />
        <Button title="Large Rounded" styles="px-5 py-2.5 text-lg rounded-lg" />
        <Button title="Large Full" styles="px-6 py-3 text-lg rounded-full" />
      </div>
    </div>
  );
};
export default Landing;