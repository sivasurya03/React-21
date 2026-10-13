export default function Logo({ tone = 'dark', className = '' }) {
  const text = tone === 'dark' ? 'text-ink' : 'text-white'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="8" fill="#0F2620" />
        <ellipse cx="16" cy="16" rx="7" ry="9.5" transform="rotate(30 16 16)" fill="#E8A23A" />
        <path d="M12 9.5c4 3 4 10 8 13" stroke="#0F2620" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <span className={`font-display text-xl font-semibold tracking-tight ${text}`}>Firstcrack</span>
    </span>
  )
}
