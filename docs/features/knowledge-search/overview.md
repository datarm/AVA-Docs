---
sidebar_position: 1
---
# Knowledge Search Overview

## What is Knowledge Search?

Knowledge Search uses Retrieval Augmented Generation (RAG) to provide intelligent, semantic search across your SharePoint document libraries. Unlike traditional keyword search, Knowledge Search understands the meaning of your questions and finds relevant information even when exact keywords don't match.

### Key Features

- **Semantic Search**: Understands intent, not just keywords
- **Multi-Corpus Query**: Search multiple document collections simultaneously
- **Source Attribution**: Every answer includes citations to source documents
- **Auto-Sync**: Automatically updates when documents change

## How It Works

Knowledge Search combines the power of AI with your organization's documents to provide accurate, contextual answers:

1. **Documents are embedded**: Your SharePoint documents are converted into vector representations
2. **Questions are understood**: When you ask a question, the system understands the meaning and intent
3. **Relevant content is found**: The system finds the most relevant document sections using semantic similarity
4. **AI generates answers**: The AI reads the relevant sections and synthesizes a clear answer
5. **Sources are cited**: Every answer includes links to the source documents

## Why Use Knowledge Search?

### Better Than Traditional Search

| Traditional Keyword Search | Knowledge Search (RAG) |
|---------------------------|----------------------|
| Exact word matches only | Understands meaning and intent |
| Misses synonyms and variations | Finds semantically similar content |
| No context understanding | Considers document context |
| Returns documents, not answers | Generates specific answers |
| Manual review of results | AI-synthesized responses |
| No source attribution | Automatic citations |

### Real-World Example

**Your Question**: "What's our policy on working from home?"

**Traditional Search Results**:
- Might miss documents that say "remote work" or "telecommute"
- Returns a list of potentially relevant documents
- You have to read through each one to find your answer

**Knowledge Search Results**:
- Finds documents about remote work, telecommuting, and work-from-home policies
- Returns: "According to the Remote Work Policy (updated Jan 2024), employees can work from home up to 3 days per week with manager approval..."
- Includes a direct link to the exact policy document

## Common Use Cases

### Legal Teams
- Find contracts with specific clauses
- Compare terms across multiple agreements
- Track renewal dates and obligations
- Research precedents and past opinions

### HR Teams
- Answer employee policy questions
- Provide benefits information
- Support onboarding processes
- Reference procedures and guidelines

### IT Support
- Troubleshoot common issues
- Find how-to guides quickly
- Access system documentation
- Resolve tickets faster

### Sales & Marketing
- Find competitive intelligence
- Reference past proposals
- Access product documentation
- Locate relevant case studies

## Getting Started

To start using Knowledge Search:

1. **Create a Corpus**: Connect a SharePoint document library to AVA
2. **Let it Process**: AVA will embed your documents (this takes a few minutes)
3. **Start Searching**: Ask questions in natural language
4. **Get Answers**: Receive AI-generated responses with source citations

Learn more about [creating and managing knowledge bases](/docs/features/knowledge-search/knowledge-bases) and [how to use citations](/docs/features/knowledge-search/citations).

## Next Steps

- [Set up your first Knowledge Base](/docs/features/knowledge-search/knowledge-bases)
- [Learn about Corpus Management](/docs/features/knowledge-search/corpus-management)
- [Understand Citations](/docs/features/knowledge-search/citations)
