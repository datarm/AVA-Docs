---
sidebar_position: 4
---
# Corpus Management

## Corpus Dashboard

The Corpus Dashboard is your central hub for managing all knowledge bases and their embedded files. Here you can view, monitor, and maintain your corpora.

### Dashboard Features

**Corpus List**
- View all corpora you own or have access to
- See document count per corpus
- Check last sync timestamp
- Monitor storage size usage

**Search Analytics**
- Track most searched corpora
- View common queries
- Monitor user adoption metrics
- Review performance statistics

**Embedded Files View**
- See all documents in each corpus
- Check individual file status
- Add or remove specific files
- Re-embed modified documents

**Sharing Settings**
- View who has access to each corpus
- Manage permission levels
- Share with teams or individuals
- Control access rights

## Managing Documents

### Adding Documents

#### With Auto-Sync ON
When auto-sync is enabled, document management is automatic:
1. Add documents to the SharePoint library
2. AVA automatically detects new files
3. Documents are embedded automatically
4. Typically processed within 1 hour

No manual intervention required!

#### With Auto-Sync OFF
For manual document management:
1. Navigate to corpus settings
2. Click "Add Files" button
3. Select files from SharePoint
4. Click "Embed Files" to process

**Manual Selection Benefits**:
- Choose specific documents to add
- Useful for selective corpus building
- Control exactly what gets embedded
- Avoid embedding unnecessary files

### Removing Documents

To remove documents from a corpus:
1. Open the corpus embedded files view
2. Select the documents you want to remove
3. Click "Remove Files" button
4. Documents are removed from search immediately

**Important**: The original SharePoint files are NOT deleted. Only the embedded versions in the corpus are removed.

### Re-Embedding Documents

When document content changes, you may need to re-embed:

#### With Auto-Sync ON
- Automatic re-embedding when documents change
- Changes detected during sync cycles
- No manual intervention needed

#### With Auto-Sync OFF
To manually re-embed:
1. Navigate to embedded files view
2. Select modified documents
3. Click "Re-Embed" button
4. AVA processes the updated content

**When to Re-Embed**:
- Document content has changed significantly
- You want to pick up recent edits
- After fixing document formatting issues
- When search results seem outdated

## Corpus Settings

### Editable Settings

You can modify these settings at any time:

**Description**
- Update to reflect current corpus contents
- Clarify use cases
- Add usage guidelines

**Auto-Sync Toggle**
- Enable or disable at any time
- Switch from manual to automatic updates
- Pause syncing for maintenance

**Sharing Permissions**
- Add or remove users
- Change permission levels
- Share with teams or individuals

### Read-Only Settings

These settings cannot be changed after creation:

**Field Extraction**
- View configured fields
- See extraction rules
- Cannot modify or add new fields
- Plan carefully during creation!

**Source SharePoint Library**
- Original library selection is permanent
- Cannot change to different library
- Must create new corpus for different source

### Storage Management

Monitor and manage corpus storage:

**View Storage Usage**
- See total storage per corpus
- Track growth over time
- Identify large documents

**Optimize Storage**
- Remove unused documents
- Archive old versions
- Delete outdated corpora

**Storage Guidelines**:
- Regular cleanup recommended
- Archive historical content separately
- Monitor for unexpected growth

## Corpus Maintenance

### Regular Maintenance Tasks

#### Weekly Tasks
- Review search analytics
- Check for failed embeddings
- Verify auto-sync is working
- Remove obsolete documents

#### Monthly Tasks
- Audit corpus permissions
- Review storage usage
- Update corpus descriptions
- Test with common queries

#### Quarterly Tasks
- Evaluate corpus effectiveness
- Consider restructuring if needed
- Archive unused corpora
- Plan for new knowledge bases

### Monitoring Corpus Health

**Sync Status**
- Check last successful sync
- Review any sync errors
- Verify all expected documents are present

**Search Performance**
- Monitor query response times
- Review user feedback
- Check relevance of results

**Storage Growth**
- Track storage trends
- Plan for capacity needs
- Identify unusual growth patterns

**User Activity**
- Monitor usage patterns
- Identify most valuable corpora
- Find underutilized knowledge bases

## Troubleshooting

### Common Issues and Solutions

#### Auto-Sync Not Working

**Problem**: New documents not appearing in corpus

**Solutions**:
1. Verify auto-sync is enabled in corpus settings
2. Check that you still have SharePoint access permissions
3. Review sync frequency settings (typically hourly)
4. Manually trigger a sync to test connectivity
5. Check embedded files view for sync error messages

#### Documents Not Embedding

**Problem**: Documents stuck in processing state

**Solutions**:
1. Check document file size (must be under 50MB)
2. Verify file type is supported (PDF, Word, Excel, PowerPoint, TXT)
3. Ensure file is not corrupted
4. Try downloading and re-uploading to SharePoint
5. Check for special characters in filename

#### Search Results Outdated

**Problem**: Results don't reflect recent document changes

**Solutions**:
1. Check if auto-sync is enabled
2. Verify last sync timestamp
3. Manually re-embed affected documents
4. Wait for next sync cycle
5. Check if document was actually modified in SharePoint

#### Slow Processing

**Problem**: Corpus taking too long to process

**Expected Processing Times**:
- 10 documents: ~1 minute
- 100 documents: ~10 minutes
- 1,000 documents: ~1-2 hours

**If Processing is Slower**:
1. Check document sizes (large PDFs take longer)
2. Verify SharePoint connection is stable
3. Check if multiple corpora are processing simultaneously
4. Review system performance metrics
5. Consider breaking into smaller corpora

#### Permission Errors

**Problem**: Cannot access corpus or documents

**Solutions**:
1. Verify you have appropriate corpus permissions
2. Check SharePoint library access
3. Confirm organizational access policies
4. Contact corpus owner for access
5. Review sharing settings

## Best Practices

### Corpus Organization

**Keep Corpora Focused**
- One clear purpose per corpus
- Avoid mixing unrelated content
- Split large collections by topic

**Use Descriptive Names**
- Clear, specific names
- Include department or purpose
- Avoid generic names like "Documents"

**Maintain Current Content**
- Enable auto-sync for active libraries
- Remove outdated documents regularly
- Archive historical content separately

### Performance Optimization

**Document Size**
- Keep files under 10MB when possible
- Compress large PDFs
- Split very large documents

**Corpus Size**
- Aim for 100-1,000 documents per corpus
- Create multiple corpora for very large collections
- Consider splitting by time period or category

**Regular Cleanup**
- Remove unused documents monthly
- Archive old versions
- Delete duplicate files

### User Management

**Access Control**
- Grant minimum necessary permissions
- Review access quarterly
- Remove inactive users

**Training Users**
- Provide clear descriptions
- Document search examples
- Share best practices

**Monitoring Usage**
- Track which corpora are most valuable
- Identify unused knowledge bases
- Gather user feedback

## Advanced Features

### Bulk Operations

**Bulk Document Addition**
- Select multiple files at once
- Process entire folders
- Queue large batches

**Bulk Document Removal**
- Filter and select multiple documents
- Remove by criteria (date, size, type)
- Clean up in batches

**Bulk Re-Embedding**
- Re-process entire corpus
- Update multiple documents at once
- Schedule during off-hours

### Corpus Analytics

**Usage Metrics**
- Total searches
- Unique users
- Most common queries
- Search success rate

**Performance Metrics**
- Average response time
- Embedding success rate
- Storage efficiency
- Sync reliability

**User Satisfaction**
- Result relevance scores
- User feedback
- Follow-up question rate
- Citation usage

## Next Steps

- Learn about [Citations and Sources](/docs/features/knowledge-search/citations)
- Review [Knowledge Bases Setup](/docs/features/knowledge-search/knowledge-bases)
- Return to [Knowledge Search Overview](/docs/features/knowledge-search/overview)
