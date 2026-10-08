export type OpenSourcePR = {
  id: string
  title: string
  url: string
  xyz: string
  what: string
  stat: string
  files: string
}

export type OpenSourceProject = {
  repo: string
  org: string
  githubUrl: string
  brand: "hf" | "haystack" | "gx"
  brandColor: string
  mergedCount: string
  date: string
  tags: string[]
  description: string
  prs: OpenSourcePR[]
}

export const opensource: OpenSourceProject[] = [
  {
    repo: "fivetran/great_expectations",
    org: "Great Expectations",
    githubUrl: "https://github.com/fivetran/great_expectations",
    brand: "gx",
    brandColor: "#FF6B35",
    mergedCount: "2 MERGED",
    date: "Oct 2026",
    tags: ["PYTHON", "GX", "DATA-QUALITY", "SPARK"],
    description:
      "Schema-level data quality work in the GX library. Shipped a new batch expectation and fixed Spark filtering.",
    prs: [
      {
        id: "#12186",
        title: "[FEATURE] Add ExpectColumnTypeToBe BatchExpectation",
        url: "https://github.com/fivetran/great_expectations/pull/12186",
        xyz: "Added a batch expectation that validates a column's declared type on Pandas, SQLAlchemy, and Spark, reporting the observed type.",
        what: "Reads the batch's declared column types and compares them against the expected type, with a separate comparison path for Pandas, SQLAlchemy, and Spark.",
        stat: "+1803 -10",
        files: "expectations/core/expect_column_type_to_be.py + tests",
      },
      {
        id: "#12285",
        title: "[BUGFIX] Quote Spark column names in SQL filters",
        url: "https://github.com/fivetran/great_expectations/pull/12285",
        xyz: "Fixed Spark filters so columns with spaces or hyphens in their names resolve to the right column instead of miscomputing or erroring.",
        what: "Backtick-quotes each segment of column names when building Spark SQL filter strings, so spaced or hyphenated names resolve while nested struct paths keep working.",
        stat: "+312 -27",
        files: "sparkdf_execution_engine.py + tests",
      },
    ],
  },
  {
    repo: "huggingface/transformers",
    org: "Hugging Face",
    githubUrl: "https://github.com/huggingface/transformers",
    brand: "hf",
    brandColor: "#FFD21E",
    mergedCount: "2 MERGED",
    date: "Jul - Aug 2026",
    tags: ["PYTHON", "PYTORCH", "QUANTIZATION", "NPU"],
    description:
      "Upstream fixes in the most-used LLM library. Small diffs with wide blast radius across quantization and test infra.",
    prs: [
      {
        id: "#47701",
        title: "clean up reverse_op fixme in compressed_tensors",
        url: "https://github.com/huggingface/transformers/pull/47701",
        xyz: "Fixed model saving for compressed-tensors MoE models, where the expert-decompression reverse step returned an empty operation instead of passing weights through.",
        what: "Returns a pass-through identity operation as the save-time reverse step instead of an empty value.",
        stat: "+2 -2",
        files: "integrations/compressed_tensors.py",
      },
      {
        id: "#47587",
        title: "fix npu check",
        url: "https://github.com/huggingface/transformers/pull/47587",
        xyz: "Fixed test device detection to report NPU only when the device is actually usable instead of whenever NPU support is installed.",
        what: "Requires the NPU availability check to pass before reporting NPU, otherwise falls through to the default device.",
        stat: "+2 -2",
        files: "testing_utils.py",
      },
    ],
  },
  {
    repo: "deepset-ai/haystack",
    org: "deepset Haystack",
    githubUrl: "https://github.com/deepset-ai/haystack",
    brand: "haystack",
    brandColor: "#0EAF9C",
    mergedCount: "2 MERGED",
    date: "Aug 2026",
    tags: ["PYTHON", "RAG", "PDF", "MYPY-STRICT"],
    description:
      "Feature + type-safety work in the open-source RAG framework. Shipped user-facing hyperlink support and hardened CI.",
    prs: [
      {
        id: "#12273",
        title: "feat: Add link_format to PDF converters (#10677)",
        url: "https://github.com/deepset-ai/haystack/pull/12273",
        xyz: "Gave both PDF converters the hyperlink preservation that only the DOCX converter had, and fixed saved pipelines losing custom layout settings.",
        what: "Reads each page's link annotations and appends them to the page text, isolating bad annotations so one corrupt link cannot drop the whole document.",
        stat: "+414 -57",
        files: "converters/pypdf.py, pdfminer.py + tests",
      },
      {
        id: "#12216",
        title: "Modernize generator tests",
        url: "https://github.com/deepset-ai/haystack/pull/12216",
        xyz: "Made the generator tests type-safe and enforced strict type checking on them in CI.",
        what: "Adds explicit type annotations and null checks across the generator tests and enforces strict type checking on that directory in CI.",
        stat: "+830 -395",
        files: "test/components/generators/ + pyproject",
      },
    ],
  },
]
