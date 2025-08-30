"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export function BrochureDownload() {
  const { t } = useTranslation('common')
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('components.brochure.title')}</CardTitle>
        <CardDescription>{t('components.brochure.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <a href="/services">{t('components.brochure.button')}</a>
        </Button>
      </CardContent>
    </Card>
  )
}

