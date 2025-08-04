export default function Spinner() {
  return (
    <div className="flex justify-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
