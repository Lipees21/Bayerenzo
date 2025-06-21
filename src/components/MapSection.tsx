
export const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Our Location
          </h2>
          <p className="text-xl text-gray-600">
            Visit our shop in Edinburg, TX or choose our mobile service
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1234567890123!2d-98.1234567890123!3d26.3012345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s805%20N%20Kenyon%20Rd%2C%20Edinburg%2C%20TX%2078539!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bayerenzo Car Detailing Location"
            ></iframe>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">In-Shop Service</h3>
              <div className="space-y-2 text-blue-800">
                <p><strong>Address:</strong> 805 N. Kenyon Rd, Edinburg, TX 78539</p>
                <p><strong>Parking:</strong> Free on-site parking available</p>
                <p><strong>Wait Time:</strong> Comfortable waiting area</p>
                <p><strong>Duration:</strong> 2-3 hours depending on service</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Mobile Service</h3>
              <div className="space-y-2 text-orange-800">
                <p><strong>Service Area:</strong> Edinburg and surrounding areas</p>
                <p><strong>Requirements:</strong> Access to water and power outlet</p>
                <p><strong>Scheduling:</strong> Advanced booking required</p>
                <p><strong>Convenience:</strong> We bring everything to you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
