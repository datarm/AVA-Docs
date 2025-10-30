---
sidebar_position: 3
---
# Citations and Source Attribution

## What are Citations?

Every answer from Knowledge Search includes citations - references to the specific documents where the information was found. This ensures transparency, allows you to verify information, and helps you find the full context when needed.

## How Citations Work

### Automatic Source Attribution

When AVA generates an answer using Knowledge Search:

1. **Relevant Documents are Found**: The system identifies the most relevant sections across your corpus
2. **Information is Synthesized**: The AI reads these sections and creates a comprehensive answer
3. **Sources are Cited**: Every piece of information is automatically linked to its source document
4. **Links are Provided**: You can click any citation to open the full source document

### What's Included in a Citation

Each citation provides:

- **Document Name**: The title or filename of the source document
- **Relevance Score**: How relevant this source is to your question (0-100%)
- **Excerpt**: The specific passage that contains the relevant information
- **Page/Section**: Where in the document the information appears
- **Direct Link**: Clickable link to open the full document in SharePoint

## Viewing and Using Citations

### In Search Results

When you receive a Knowledge Search answer:

**Answer Section**
- AI-generated response synthesizing information from sources
- Inline citation markers (e.g., [1], [2]) linking to sources
- Clear, natural language that combines information across documents

**Sources Section** (below the answer)
- List of all cited documents
- Relevance scores for each source
- Key excerpts highlighted
- Clickable links to full documents

### Example Citation Flow

**Your Question**: "What are the indemnification terms in our vendor contracts?"

**AVA's Answer**:
> "Based on your vendor contracts, indemnification terms typically include mutual indemnification for third-party claims [1], with liability caps at 2x the annual contract value [2]. Vendors must maintain commercial general liability insurance of at least $1M [3]."

**Sources**:
1. **Acme Corp Vendor Agreement.pdf** (95% relevance)
   - Section 8: Indemnification
   - "Each party shall indemnify and hold harmless the other party..."
   - [Open Document →]

2. **Standard Vendor Template v3.docx** (89% relevance)
   - Page 7: Limitation of Liability
   - "In no event shall liability exceed two times the total fees..."
   - [Open Document →]

3. **Vendor Insurance Requirements.pdf** (82% relevance)
   - Page 2: Required Coverage
   - "Minimum commercial general liability: $1,000,000 per occurrence"
   - [Open Document →]

## Why Citations Matter

### Trust and Verification

**Transparency**
- See exactly where information comes from
- No "black box" AI responses
- Full traceability to source documents

**Accuracy**
- Verify AI interpretations against original text
- Check context and nuance
- Catch potential misunderstandings

**Compliance**
- Meet audit requirements
- Document research trails
- Prove due diligence

### Further Research

**Deep Dives**
- Click citations to read full documents
- Explore related content in same document
- Find additional details not in summary

**Cross-References**
- Compare information across multiple sources
- Identify inconsistencies
- Build comprehensive understanding

## Working with Multiple Sources

### Multi-Document Answers

Knowledge Search often synthesizes information from multiple documents:

**Benefits**:
- More comprehensive answers
- Multiple perspectives
- Cross-validation of information
- Richer context

**Example**: "What's our company's stance on remote work?"

AVA might cite:
1. Remote Work Policy (HR Handbook)
2. COVID-19 Workplace Guidelines
3. Manager's Guide to Hybrid Teams
4. IT Security Requirements for Remote Access

Each provides a different piece of the complete picture.

### Handling Conflicting Sources

When sources conflict, AVA will:

1. **Acknowledge the Conflict**: "Policies appear to differ..."
2. **Cite All Sources**: Show all relevant documents
3. **Note Dates**: Help identify which is current
4. **Suggest Action**: "Verify with HR which policy is current"

**Example**:
> "The 2023 Remote Work Policy [1] allows 3 days per week remote work, while the 2024 update [2] increased this to 4 days. The more recent policy [2] appears to be current."

## Best Practices for Citations

### For Users

**Always Check Citations**
- Don't rely solely on AI summaries for critical decisions
- Click through to verify important information
- Read full context when needed

**Use Citations for Follow-Up**
- Reference specific documents in further questions
- Ask for clarification about particular sources
- Request comparisons between cited documents

**Save Useful Citations**
- Bookmark frequently referenced documents
- Share relevant citations with team members
- Build personal knowledge repository

### For Administrators

**Ensure Document Quality**
- Keep source documents accurate and current
- Remove outdated information
- Maintain clear document structure

**Update Regularly**
- Enable auto-sync for frequently changing content
- Archive superseded documents
- Mark documents with effective dates

**Audit Citation Usage**
- Review which documents are most cited
- Identify gaps in knowledge base
- Improve frequently accessed documents

## Understanding Relevance Scores

### How Scores are Calculated

Relevance scores (0-100%) indicate how well a document answers your question:

**90-100%**: Highly relevant
- Directly answers your specific question
- Contains detailed, on-topic information
- Primary source for the answer

**70-89%**: Relevant
- Contains useful related information
- May address part of your question
- Provides supporting context

**50-69%**: Somewhat relevant
- Tangentially related
- Background information
- May help with broader understanding

**Below 50%**: Low relevance
- Rarely shown in results
- Minimal connection to question
- System filtered these out

### Using Relevance Scores

**Prioritize High Scores**
- Start with documents above 85%
- These are most likely to have your answer

**Don't Ignore Lower Scores**
- Sometimes valuable information appears in unexpected places
- Lower-scored sources may provide unique insights
- Context from related documents can be helpful

**Question the Results**
- If all scores are low (< 70%), try rephrasing your question
- High scores but wrong answers? Consider re-embedding corpus
- Missing expected documents? Check corpus contents

## Troubleshooting Citation Issues

### No Citations Provided

**Problem**: Answer given but no sources listed

**Possible Causes**:
1. Question answered from general knowledge, not corpus
2. Corpus not properly selected before searching
3. No relevant documents found

**Solutions**:
- Ensure corpus is selected (check @ button)
- Verify question is about content in corpus
- Rephrase question to match document language

### Wrong Documents Cited

**Problem**: Citations don't seem relevant to question

**Possible Causes**:
1. Question too broad or vague
2. Corpus contains unexpected content
3. Documents need re-embedding

**Solutions**:
- Be more specific in question
- Review corpus contents
- Check document quality
- Consider splitting corpus

### Citations Link to Wrong Location

**Problem**: Clicking citation doesn't show relevant content

**Possible Causes**:
1. Document has been modified since embedding
2. SharePoint URL changed
3. Permission issues

**Solutions**:
- Re-embed the document
- Check SharePoint link is still valid
- Verify you have access to source file

### Missing Recent Documents

**Problem**: Newly added documents not appearing in citations

**Possible Causes**:
1. Document not yet embedded
2. Auto-sync not enabled or not run recently
3. Processing still in progress

**Solutions**:
- Check embedded files view for status
- Verify auto-sync settings
- Manually trigger embedding if needed
- Wait for next sync cycle

## Advanced Citation Features

### Citation Export

Export citations for documentation or research:

**Export Formats**:
- Copy all citations as text
- Export to Word document
- Save as PDF with hyperlinks
- Add to workspace for sharing

**Use Cases**:
- Legal research trails
- Compliance documentation
- Report preparation
- Team knowledge sharing

### Citation Analytics

Track citation patterns to improve your knowledge base:

**Metrics Available**:
- Most cited documents
- Documents never cited (candidates for removal)
- Citation patterns by department
- Search success rates

**Optimization Actions**:
- Improve frequently cited documents
- Remove never-cited documents
- Create corpora around popular topics
- Fill gaps in knowledge coverage

## Privacy and Security

### Citation Permissions

**Access Control**:
- Citations only show documents you have permission to access
- SharePoint permissions are respected
- Other users may see different citations based on their access

**Sharing Considerations**:
- Be mindful when sharing answers with citations
- Recipients must have access to cited documents
- Consider workspace permissions for shared searches

### Audit Trail

All citation usage is logged:

**Tracked Information**:
- Who accessed which citations
- When documents were accessed via citations
- Search queries leading to citations
- Citation click-through rates

**Compliance Benefits**:
- Full audit trail for sensitive documents
- Track information access
- Meet regulatory requirements

## Next Steps

- Return to [Knowledge Search Overview](/docs/features/knowledge-search/overview)
- Learn about [Knowledge Bases](/docs/features/knowledge-search/knowledge-bases)
- Explore [Corpus Management](/docs/features/knowledge-search/corpus-management)
