'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Zap, CheckCircle, XCircle } from 'lucide-react'

export default function DebugAIPage() {
  const [topic, setTopic] = useState('Network Security Best Practices')
  const [focusKeyword, setFocusKeyword] = useState('network security')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const testContentGeneration = async () => {
    if (!topic || !focusKeyword) {
      setError('Please provide both topic and focus keyword')
      return
    }

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      console.log('Sending request to generate content...')
      
      const requestData = {
        action: 'generate',
        topic,
        focusKeyword,
        language: 'EN',
        contentType: 'article',
        targetLength: 'medium',
        tone: 'professional',
        audience: 'enterprise',
        includeElements: {
          introduction: true,
          conclusion: true,
          bestPractices: true
        }
      }

      console.log('Request data:', requestData)

      const response = await fetch('/api/admin/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        setResult(data)
        setError(null)
      } else {
        setError(`API Error: ${data.error || 'Unknown error'}`)
        setResult(null)
      }
    } catch (err) {
      console.error('Request failed:', err)
      setError(`Network Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Content Generation Debug
        </h1>
        <p className="text-gray-600">
          Test the AI content generation functionality step by step
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>Test Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter article topic..."
              />
            </div>
            
            <div>
              <Label htmlFor="keyword">Focus Keyword</Label>
              <Input
                id="keyword"
                value={focusKeyword}
                onChange={(e) => setFocusKeyword(e.target.value)}
                placeholder="Enter focus keyword..."
              />
            </div>

            <Button 
              onClick={testContentGeneration}
              disabled={isLoading || !topic || !focusKeyword}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating Content...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Test Content Generation
                </>
              )}
            </Button>

            {error && (
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Error:</strong> {error}
                </AlertDescription>
              </Alert>
            )}

            {result && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Success!</strong> Content generated successfully.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
                <p className="text-gray-600">Generating content with AI...</p>
                <p className="text-sm text-gray-500 mt-2">This may take 10-30 seconds</p>
              </div>
            ) : result ? (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Title</Label>
                  <p className="text-sm bg-gray-50 p-2 rounded">{result.data?.title}</p>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Meta Description</Label>
                  <p className="text-sm bg-gray-50 p-2 rounded">{result.data?.metaDescription}</p>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Content Preview</Label>
                  <div className="bg-gray-50 p-4 rounded max-h-64 overflow-y-auto">
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: result.data?.contentHtml?.substring(0, 1000) + '...' }}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Stats</Label>
                  <div className="text-sm bg-gray-50 p-2 rounded space-y-1">
                    <p>Read Time: {result.data?.estimatedReadTime}</p>
                    <p>Slug: {result.data?.suggestedSlug}</p>
                    <p>Word Count: ~{result.data?.contentHtml?.replace(/<[^>]*>/g, '').split(/\s+/).length} words</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No content generated yet.</p>
                <p className="text-sm">Fill in the parameters and click "Test Content Generation"</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Full Content Display */}
      {result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Full Generated Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={result.data?.contentHtml || ''}
              readOnly
              className="min-h-[300px] font-mono text-xs"
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
