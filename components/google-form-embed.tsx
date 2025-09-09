"use client"

export default function GoogleFormEmbed() {
  return (
    <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-sm border">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdqhhg31jUJ7T96qLbPf9oYFTCP8SAKybCQNVqEkziM0ymP4w/viewform?embedded=true"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  )
}
