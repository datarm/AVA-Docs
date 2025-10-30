---
sidebar_position: 2
---
# Knowledge Bases

## What is a Corpus?

A **corpus** (also called a "knowledge base") is a collection of documents from a SharePoint site or document library that has been:
- Embedded (converted to vector representations)
- Indexed for semantic search
- Made searchable through AVA

Think of it as creating a searchable "knowledge base" from your documents.

## Example Corpora

### Legal Department
**Contracts Corpus**
- Source: Legal/Contracts SharePoint library
- 350 vendor and customer contracts
- Auto-sync: ON
- Field extraction: Company Name, Contract Type, Effective Date, Value
- **Use Case**: "Find all contracts with auto-renewal clauses"

### HR Department
**Employee Handbook Corpus**
- Source: HR Policies SharePoint site
- 45 policy documents
- Auto-sync: ON
- Field extraction: Policy Name, Department, Last Updated
- **Use Case**: "What's the remote work policy?"

### IT Support
**Technical Documentation Corpus**
- Source: Support/Documentation library
- 200+ troubleshooting guides
- Auto-sync: ON
- Field extraction: Product, Issue Category, Severity
- **Use Case**: "How do I troubleshoot login timeouts?"

### Sales Team
**Proposal Library Corpus**
- Source: Sales/Proposals SharePoint
- Past winning proposals
- Auto-sync: OFF (historical reference)
- Field extraction: Customer Industry, Deal Size, Product
- **Use Case**: "Find proposals for healthcare customers"

## Creating a Corpus

Follow these steps to create your first knowledge base:

### Step 1: Navigate to Knowledge Search
Click "Knowledge Search" in the AVA navigation menu.

### Step 2: Click 'Create New Corpus'
This opens the corpus creation dialog where you'll configure your knowledge base.

### Step 3: Select SharePoint Site
- Choose from the dropdown of available SharePoint sites
- You must have read access to the site
- You can preview the site contents before selecting

### Step 4: Select Document Library
- Choose a specific library within the site
- See a preview of the document count
- Supported file types: PDF, Word, Excel, PowerPoint, and text files

### Step 5: Add Description
Write a clear description to help users understand when to use this corpus:

**Good Example**:
```
Contains all vendor contracts from 2020-present.
Use for contract term searches, renewal dates, and clause analysis.
```

Good descriptions help users know when to use this corpus for their searches.

### Step 6: Configure Auto-Sync

**Auto-Sync ON**: AVA periodically checks SharePoint for:
- New documents (added automatically)
- Modified documents (re-embedded)
- Deleted documents (removed from corpus)

**Auto-Sync OFF**: Corpus is static, manual updates only

**Recommendation**: Enable auto-sync for active document libraries

### Step 7: Set Field Extraction (Optional)

Extract custom fields from documents for enhanced filtering.

**Common fields to extract**:
- `document_type`: Contract, Policy, Guide
- `department`: Sales, Legal, Engineering
- `date`: Effective date, creation date
- `author`: Document creator
- `company`: Customer or vendor name
- `keywords`: Custom tags

**Important**: Field extraction cannot be changed after creation, so plan carefully.

### Step 8: Create & Process
- Click "Create Corpus + Add Files"
- AVA begins embedding documents
- Processing time: approximately 1 minute per 10 documents
- You can leave the page and return later to check progress

## Using Knowledge Search

### Basic Search Process

1. **Select Corpus**: Click the "@ Connected Data" button and choose your corpus from the dropdown
   - Example: Select "@Contracts Demo"
   - Tip: You can select multiple corpora to search simultaneously

2. **Ask Question**: Type your question in natural language
   - "Find contracts with termination for convenience clauses"
   - "What are the indemnification terms in customer contracts?"
   - "Show me all contracts expiring in Q1 2025"

3. **Review Results**: AVA returns:
   - **Answer**: AI-generated response synthesizing relevant information
   - **Sources**: Links to specific documents with relevance scores
   - **Excerpts**: Relevant passages highlighted in context
   - Each source is clickable to open the full document

4. **Refine Search**: Ask follow-up questions:
   - "Which of these have the shortest notice period?"
   - "Compare the payment terms across these contracts"
   - "Show me the specific contract language"

## Advanced Search Techniques

### Multi-Corpus Search
Search across multiple knowledge bases simultaneously:
- Select multiple corpora: @Contracts Demo, @Vendor Agreements, @MSAs
- Ask: "Find all payment terms across all contract types"
- Result: AVA searches all selected corpora and synthesizes results
- Use Case: Comprehensive research across document types

### Field Filtering
If your corpus has field extraction configured:
- Query: "Find contracts where document_type='MSA' and company contains 'Tech'"
- AVA filters documents matching criteria before searching content
- Use Case: Narrow search to specific document categories

### Date Range Queries
Ask time-based questions:
- "Show contracts signed in 2024"
- "Policies updated in the last 6 months"
- "Guides created this year"
- "Contracts expiring next quarter"

AVA understands temporal queries and filters accordingly.

### Comparison Queries
Compare information across documents:
- "Compare payment terms in Microsoft contract vs Salesforce contract"
- "How does our current PTO policy differ from the 2020 version?"
- "Compare indemnification clauses across top 5 contracts"

AVA retrieves multiple documents and provides side-by-side comparisons.

### Extraction Queries
Extract structured data from documents:
- "Create a table of all contracts with columns: Company, Value, Expiration Date, Auto-Renewal"
- AVA extracts the information and formats it as a table
- You can export the table to Excel
- Use Case: Data extraction and analysis

## Best Practices

### Organize by Purpose
Create separate corpora for different use cases:

✅ **Good Approach**:
- "Vendor Contracts" corpus
- "Customer Contracts" corpus
- "NDAs" corpus

❌ **Avoid**:
- Single "All Contracts" corpus with everything mixed together

**Why**: More focused search leads to better, more relevant results.

### Write Clear Descriptions
Help users understand when to use each corpus:

✅ **Good Description**:
```
Contains all active vendor contracts from 2022-present.
Use for: payment terms, renewal dates, SLA requirements.
Auto-synced daily.
```

❌ **Poor Description**:
```
Vendor stuff
```

**Why**: Users can find the right corpus faster with clear descriptions.

### Enable Auto-Sync for Active Libraries
Turn auto-sync **ON** for:
- Policy documents that change frequently
- Active contracts
- Current product documentation

Turn auto-sync **OFF** for:
- Historical/archived documents
- Reference libraries that don't change

**Why**: Keep your corpus current without manual work.

### Plan Field Extraction Carefully
Decide on fields before creating the corpus:

**Useful fields**:
- Document category/type
- Dates (effective, expiration, creation)
- Company/customer name
- Department/owner
- Status (active, expired, draft)

**Why**: Field extraction enables filtered searches and better organization, but cannot be changed after creation.

### Test Your Corpus
After creating a corpus, test it with common questions:
1. Ask typical user questions
2. Verify relevant documents are returned
3. Check if answers are accurate
4. Refine the corpus if needed

**Why**: Ensure the corpus meets user needs before rolling it out.

## Performance & Limits

### Document Limits
- Maximum documents per corpus: 10,000
- Maximum file size: 50MB per document
- Supported types: PDF, Word, Excel, PowerPoint, TXT

### Search Performance
- Vector search: Less than 1 second
- AI response generation: 3-8 seconds
- Typical total query time: 5-10 seconds

### Storage
- Vectors stored in PostgreSQL with pgVector
- Original files remain in SharePoint
- Corpus metadata and embeddings: approximately 1MB per 100 pages

## Next Steps

- Learn about [Corpus Management](/docs/features/knowledge-search/corpus-management)
- Understand [Citations and Sources](/docs/features/knowledge-search/citations)
- Return to [Knowledge Search Overview](/docs/features/knowledge-search/overview)
