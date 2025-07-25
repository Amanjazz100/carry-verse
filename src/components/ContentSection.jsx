import React from 'react';

const ContentSection = () => {
  // Use the correct YouTube embed URLs for iframes
  const videos = [
    { title: "VARDAAN SONG", url: "https://www.youtube.com/embed/7mFvyrNHZRY" },
    { title: "Ladkiyo Ka Best Friend", url: "https://www.youtube.com/embed/l6BChpns5w8?si=6dTjWs6qIGa6_xIz" },
    { title: "YAALGAAR ", url: "https://www.youtube.com/embed/zzwRbKI2pn4" },
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