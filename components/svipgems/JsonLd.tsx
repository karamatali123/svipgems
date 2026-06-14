import { getAllSchemas } from "@/lib/svipgems/schema";

export function JsonLd() {
  const schemas = getAllSchemas();

  return (
    <>
      {schemas.map(({ id, data }) => (
        <script
          key={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
