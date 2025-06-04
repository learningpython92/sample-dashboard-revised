const PrimaryButton = ({ children, loading, ...props }) => (
  <button
    {...props}
    className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
    disabled={loading || props.disabled}
  >
    {loading ? "Processing..." : children}
  </button>
);

export default PrimaryButton; 