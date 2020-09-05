const NotifIndicator = () => {
  return (
    <span className="flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-white border"></span>
    </span>
  );
};

export default NotifIndicator;
