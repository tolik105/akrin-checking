import { NextResponse } from 'next/server'

const DEEPL_API_KEY = process.env.DEEPL_API_KEY
const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate'

export async function POST(request: Request) {
  try {
    const { text, targetLang, sourceLang } = await request.json()

    if (!text || !targetLang) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!DEEPL_API_KEY) {
      return NextResponse.json(
        { error: 'DeepL API key not configured' },
        { status: 500 }
      )
    }

    const params = new URLSearchParams({
      auth_key: DEEPL_API_KEY,
      text: text,
      target_lang: targetLang.toUpperCase(),
      ...(sourceLang && { source_lang: sourceLang.toUpperCase() })
    })

    const response = await fetch(DEEPL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    })

    if (!response.ok) {
      throw new Error(`DeepL API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return NextResponse.json({
      translatedText: data.translations[0].text,
      detectedSourceLang: data.translations[0].detected_source_language
    })
  } catch (error) {
    console.error('Translation error:', error)
    return NextResponse.json(
      { error: 'Translation failed' },
      { status: 500 }
    )
  }
}