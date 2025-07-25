import React from 'react';

const ContentSection = () => {
  const videos = [
    { title: "YouTube VS TikTok", url: "https://www.youtube.com/embed/6Dh-RL__uN4" },
    { title: "The Art of Roasting", url: "https://www.youtube.com/embed/Bxd4FZZv5dY" },
    { title: "Among Us With Thug Squad", url: "https://www.youtube.com/embed/IYzZRYV1cZQ" },
  ];

  return (
    <section id="content" className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">Popular Videos</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div key={idx} className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center text-gray-300 mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;