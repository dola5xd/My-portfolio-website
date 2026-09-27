function Spinner() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-primary-800">
      <span className="w-20 h-20 border-4 border-t-4 rounded-full border-primary-600 border-t-indigo-500 animate-spin"></span>
    </div>
  );
}

export default Spinner;
