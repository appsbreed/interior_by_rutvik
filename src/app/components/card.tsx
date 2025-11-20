import Image from 'next/image';

const Card = () => {
  return (
    <div className="w-[350px] my-4"> {/* Reduced width */}
      <div className="flex flex-col rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
        {/* Image Section */}
        <div className="relative h-40"> {/* Reduced height */}
          <Image
            src="https://images.jdmagicbox.com/quickquotes/images_main/modular-compact-l-shaped-kitchen-design-in-dark-hues-2217788849-x6awdqt1.jpg"
            alt="Card Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-1">Card Title</h2>
          <p className="text-sm text-gray-600 mb-2">
            Short description inside the card.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Read more →</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
