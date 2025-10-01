// components/GoogleCalendarEmbed.tsx
const GoogleCalendarEmbed = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=pablomurillo.sp%40gmail.com&ctz=America%2FArgentina%2FBuenos_Aires"
      style={{ border: 0 }}
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="no"
      className="max-h-[40dvh] rounded-2xl"
    ></iframe>
  );
};

export default GoogleCalendarEmbed;
