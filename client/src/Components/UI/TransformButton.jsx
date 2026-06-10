function TransformButton({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center justify-center rounded-3xl bg-brand-bt text-brand-text px-6 py-4 transition-transform duration-300 ease-out shadow-lg hover:-translate-y-1 hover:scale-[1.02] active:scale-95 ${className}`}
    >
      <div className="space-y-1 text-left">
        {children}
      </div>
    </button>
  );
}

export default TransformButton;
