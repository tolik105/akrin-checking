import { NextRequest, NextResponse } from 'next/server';
import { serankingAPI } from '@/lib/seranking-api';

/**
 * GET /api/seo/audit/[id]
 * Get website audit status and results
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auditId = parseInt(params.id);
    
    if (isNaN(auditId)) {
      return NextResponse.json(
        { error: 'Invalid audit ID' },
        { status: 400 }
      );
    }

    // Get audit status
    const auditStatus = await serankingAPI.getAuditStatus(auditId);
    
    let auditReport = null;
    if (auditStatus.status === 'finished') {
      try {
        auditReport = await serankingAPI.getAuditReport(auditId);
      } catch (error) {
        console.warn('Failed to get audit report:', error);
      }
    }

    return NextResponse.json({
      success: true,
      auditId,
      data: {
        status: auditStatus,
        report: auditReport,
        retrievedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Audit Status Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to get audit status', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/seo/audit/[id]
 * Restart an existing audit
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auditId = parseInt(params.id);
    
    if (isNaN(auditId)) {
      return NextResponse.json(
        { error: 'Invalid audit ID' },
        { status: 400 }
      );
    }

    // Note: The restart endpoint would be implemented here
    // For now, we'll return a placeholder response
    return NextResponse.json({
      success: true,
      auditId,
      message: 'Audit restart functionality will be implemented when available in SEranking API',
      data: {
        restartedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Audit Restart Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to restart audit', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
