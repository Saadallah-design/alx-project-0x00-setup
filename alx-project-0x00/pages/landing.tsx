import Card from "@/components/Card"
import Button from "@/components/Button" // Import the Button component
import React from "react"

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>
      <Card />
      <Card />

      {/* Button Examples Section */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Button Component Examples</h2>
      
      {/* Small Buttons */}
      <div className="flex items-center space-x-4 mb-4">
        <Button title="Small" size="small" shape="rounded-sm" />
        <Button title="Small" size="small" shape="rounded-md" />
        <Button title="Small" size="small" shape="rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex items-center space-x-4 mb-4">
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Default" /> {/* Uses default props */}
        <Button title="Medium" size="medium" shape="rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex items-center space-x-4">
        <Button title="Large" size="large" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-full" />
      </div>
    </div>
  )
}
export default Landing