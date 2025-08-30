'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, XCircle, AlertCircle, Loader2, Zap } from 'lucide-react'

interface APITestResult {
  success: boolean
  message?: string
  error?: string
  details?: string
  configured: boolean
  response?: string
  model?: string
}

export default function TestAIPage() {
  const [testResult, setTestResult] = useState<APITestResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [autoTested, setAutoTested] = useState(false)

  // Auto-test on page load
  useEffect(() => {
    if (!autoTested) {
      testConnection()
      setAutoTested(true)
    }
  }, [autoTested])

  const testConnection = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/test-openai')
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        error: 'Failed to connect to test endpoint',
        details: 'Check that the development server is running',
        configured: false
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
    if (testResult?.success) return <CheckCircle className="h-5 w-5 text-green-500" />
    return <XCircle className="h-5 w-5 text-red-500" />
  }

  const getStatusColor = () => {
    if (testResult?.success) return 'bg-green-50 border-green-200'
    return 'bg-red-50 border-red-200'
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Content Editor Test
        </h1>
        <p className="text-gray-600">
          Test and configure the OpenAI API integration for the AKRIN CMS
        </p>
      </div>

      {/* Test Results Card */}
      <Card className={`mb-6 ${getStatusColor()}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getStatusIcon()}
            OpenAI API Connection Test
            {testResult?.success && (
              <Badge variant="default" className="bg-green-100 text-green-800">
                Working
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-4">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-blue-500" />
              <p className="text-gray-600">Testing OpenAI API connection...</p>
            </div>
          ) : testResult ? (
            <div className="space-y-4">
              {testResult.success ? (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>✅ OpenAI API is working correctly!</strong>
                    <br />
                    {testResult.message}
                    {testResult.model && (
                      <span className="block mt-1">Model: {testResult.model}</span>
                    )}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="border-red-200 bg-red-50">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>❌ OpenAI API Error</strong>
                    <br />
                    {testResult.error}
                    {testResult.details && (
                      <span className="block mt-1 text-sm">{testResult.details}</span>
                    )}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex gap-2">
                <Button onClick={testConnection} variant="outline" size="sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Test Again
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Click "Test Connection" to check the API status</p>
          )}
        </CardContent>
      </Card>

      {/* Setup Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-blue-500" />
            Setup Instructions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">
              🔧 How to Fix OpenAI API Issues
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
              <li>
                <strong>Get your OpenAI API key</strong> from{' '}
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  platform.openai.com/api-keys
                </a>
              </li>
              <li>
                <strong>Open the .env.local file</strong> in your project root
              </li>
              <li>
                <strong>Replace the placeholder</strong>:
                <br />
                <code className="bg-white px-2 py-1 rounded text-xs">
                  OPENAI_API_KEY=your-actual-api-key-here
                </code>
              </li>
              <li>
                <strong>Restart the development server</strong>:
                <br />
                <code className="bg-white px-2 py-1 rounded text-xs">
                  npm run dev
                </code>
              </li>
              <li>
                <strong>Test again</strong> using the button above
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">
              ✅ Once Working, You Can:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
              <li>Generate complete articles with AI</li>
              <li>Optimize existing content for SEO</li>
              <li>Create meta tags automatically</li>
              <li>Generate content outlines</li>
              <li>Support for English and Japanese content</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">
              💡 Troubleshooting Tips
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
              <li>API key should start with "sk-"</li>
              <li>Make sure you have OpenAI credits available</li>
              <li>Check your OpenAI usage limits</li>
              <li>Ensure your API key has the correct permissions</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
