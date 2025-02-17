interface CleaningServiceProps {
    title: string
    description: string
  }
  
  export function CleaningService({ title, description }: CleaningServiceProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  
  