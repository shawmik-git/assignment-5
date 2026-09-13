export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit lg:sticky lg:top-24">
      <div className="card-border rounded-2xl bg-surface p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">Your Stack</h2>
          {stack.length > 0 && (
            <button
              type="button"
              onClick={onRemoveAll}
              className="focus-ring rounded text-xs font-medium text-ink-muted transition hover:text-brand-pink"
            >
              Remove All
            </button>
          )}
        </div>
        <p className="mt-1 text-sm text-ink-muted">
          {stack.length} Technology Selected
        </p>

        {stack.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-surface-2 px-4 py-10 text-center">
            <p className="text-sm text-ink-muted">
              Nothing here yet. Add a technology to start building your stack.
            </p>
          </div>
        ) : (
          <ul className="mt-4 flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-xl bg-surface-2 p-3"
              >
                <img src={item.icon} alt="" className="h-8 w-8 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-ink-muted">{item.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name} from your stack`}
                  className="focus-ring flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-ink-muted transition hover:bg-base hover:text-brand-pink"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
