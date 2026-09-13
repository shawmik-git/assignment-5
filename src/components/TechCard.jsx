const CATEGORY_COLOR = {
  Frontend: "text-category-frontend bg-category-frontend/10",
  Backend: "text-category-backend bg-category-backend/10",
  Database: "text-category-database bg-category-database/10",
  Language: "text-category-language bg-category-language/10",
  Styling: "text-category-styling bg-category-styling/10",
  DevOps: "text-category-devops bg-category-devops/10",
  Tools: "text-category-tools bg-category-tools/10",
};

const DIFFICULTY_COLOR = {
  "Beginner-Friendly": "text-emerald-600",
  Intermediate: "text-amber-600",
  Advanced: "text-rose-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  const badgeClass = CATEGORY_COLOR[category] ?? "text-brand-violet bg-brand-violet/10";

  return (
    <div className="card-border group flex flex-col rounded-2xl bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${badgeClass}`}>
          <img src={icon} alt="" className="h-6 w-6" loading="lazy" />
        </div>
        {badge && (
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass}`}>
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{name}</h3>
      <p className="mt-1 flex-1 text-sm text-ink-muted">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
          {category}
        </span>
        <span className={`text-xs font-medium ${DIFFICULTY_COLOR[difficulty] ?? "text-ink-muted"}`}>
          {difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-ink">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
            <path d="M10 1.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-.7z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`focus-ring mt-5 w-full rounded-full py-2.5 text-sm font-semibold transition ${
          isAdded ? "cursor-not-allowed bg-surface-2 text-ink-faint" : "btn-dark"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
