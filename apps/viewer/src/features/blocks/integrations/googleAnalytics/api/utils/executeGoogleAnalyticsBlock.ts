import { ExecuteIntegrationResponse } from '@/features/chat'
import { deepParseVariable } from '@/features/variables'
import { GoogleAnalyticsBlock, SessionState } from 'models'

export const executeGoogleAnalyticsBlock = (
  { typebot: { variables } }: SessionState,
  block: GoogleAnalyticsBlock,
  lastBubbleBlockId?: string
): ExecuteIntegrationResponse => ({
  outgoingEdgeId: block.outgoingEdgeId,
  clientSideActions: [
    {
      googleAnalytics: deepParseVariable(variables)(block.options),
      lastBubbleBlockId,
    },
  ],
})
