import { client } from '@/lib/sanity.client'
import { SITE_SETTINGS_QUERY } from '@/lib/queries'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'
import { SiteSettings } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
}

export default async function ContactPage() {
  const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY)

  return (
    <div className="max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-lg text-muted-foreground mb-8">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      
      {settings?.contactEmail ? (
        <Button asChild size="lg">
          <a href={`mailto:${settings.contactEmail}`}>
            Say Hello
          </a>
        </Button>
      ) : (
        <p className="text-destructive">
          Contact email is not set up yet.
        </p>
      )}
    </div>
  )
}