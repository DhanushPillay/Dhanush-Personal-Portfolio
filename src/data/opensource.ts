export type OpenSourcePR = {
  id: string
  title: string
  url: string
  xyz: string
  stat: string
  files: string
}

export type OpenSourceProject = {
  repo: string
  org: string
  githubUrl: string
  brand: "hf" | "haystack"
  brandColor: string
  mergedCount: string
  date: string
  tags: string[]
  description: string
  prs: OpenSourcePR[]
}

export const opensource: OpenSourceProject[] = [
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
        xyz: "Fixed compressed-tensors MoE save/load reverse path in 1 file (+2/-2) by returning _IdentityOp() instead of None FIXME.",
        stat: "+2 -2",
        files: "integrations/compressed_tensors.py",
      },
      {
        id: "#47587",
        title: "fix npu check",
        url: "https://github.com/huggingface/transformers/pull/47587",
        xyz: "Stopped false NPU detection on device-less hosts (falls through to cpu) by gating IS_NPU_SYSTEM on torch.npu.is_available().",
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
        xyz: "Brought PDF hyperlink parity with DOCX across 7 files (+414/-57, 188 test lines, fixes #10677) by adding shared LinkFormat enum + annot extraction.",
        stat: "+414 -57",
        files: "converters/pypdf.py, pdfminer.py + tests",
      },
      {
        id: "#12216",
        title: "Modernize generator tests",
        url: "https://github.com/deepset-ai/haystack/pull/12216",
        xyz: "Made generator tests mypy-strict across 13 files (+830/-395) by typing 12 test files + gating in pyproject.toml.",
        stat: "+830 -395",
        files: "test/components/generators/ + pyproject",
      },
    ],
  },
]
