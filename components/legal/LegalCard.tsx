import type { Section, ContentBlock } from "@/data/privacy";

interface LegalCardProps {
  sections: Section[];
}

function renderContentBlock(block: ContentBlock, index: number): React.ReactNode {
  if (block.type === "paragraph") {
    return (
      <p
        key={index}
        style={{
          fontSize: "17px",
          lineHeight: 1.8,
          color: "#374151",
          marginBottom: "16px",
        }}
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={index}
        style={{
          marginBottom: "20px",
          paddingLeft: "0",
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {block.items.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#374151",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                minWidth: "6px",
                backgroundColor: "#C94F3D",
                borderRadius: "50%",
                marginTop: "10px",
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "subsection") {
    return (
      <div
        key={index}
        style={{ marginBottom: "32px" }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#111827",
            marginBottom: "14px",
            paddingBottom: "8px",
            borderBottom: "1px solid #f3f4f6",
          }}
        >
          {block.title}
        </h3>
        {block.content.map((sub, si) => renderContentBlock(sub, si))}
      </div>
    );
  }

  return null;
}

export function LegalCard({ sections }: LegalCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.07)",
        padding: "clamp(24px, 5vw, 48px)",
        width: "100%",
      }}
    >
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          style={{
            marginBottom: sectionIndex < sections.length - 1 ? "52px" : "0",
          }}
        >
          {/* Section number + title */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#C94F3D",
                backgroundColor: "rgba(201,79,61,0.08)",
                padding: "3px 9px",
                borderRadius: "6px",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "0.02em",
                flexShrink: 0,
              }}
            >
              {String(sectionIndex + 1).padStart(2, "0")}
            </span>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.3,
              }}
            >
              {section.title}
            </h2>
          </div>

          {/* Content */}
          <div>
            {section.content.map((block, blockIndex) =>
              renderContentBlock(block, blockIndex)
            )}
          </div>

          {/* Divider (except last) */}
          {sectionIndex < sections.length - 1 && (
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)",
                marginTop: "52px",
              }}
            />
          )}
        </section>
      ))}
    </div>
  );
}
