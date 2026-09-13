import TechCard from "./TechCard";

function CardSkeleton() {
  return (
    <div className="card-border animate-pulse rounded-2xl bg-surface p-5">
      <div className="h-12 w-12 rounded-xl bg-surface-2" />
      <div className="mt-4 h-4 w-2/3 rounded bg-surface-2" />
      <div className="mt-3 h-3 w-full rounded bg-surface-2" />
      <div className="mt-1 h-3 w-4/5 rounded bg-surface-2" />
      <div className="mt-5 h-10 w-full rounded-xl bg-surface-2" />
    </div>
  );
}

export default function TechGrid({ technologies, isLoading, stackIds, onAdd }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold">
          Explore the <span className="text-gradient">Technologies</span>
        </h2>
        <p className="mt-1 text-sm text-ink-muted">
          Pick the pieces that fit your project — mix and match freely.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}

        {!isLoading &&
          technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={stackIds.includes(tech.id)}
              onAdd={onAdd}
            />
          ))}
      </div>
    </div>
  );
}
