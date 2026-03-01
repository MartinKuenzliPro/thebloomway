---
title: Kontakt
slug: contact
sections:
  - title:
      text: Lass uns reden
      color: text-dark
      type: TitleBlock
    subtitle: Erstberatung für dein KMU
    text: |-
      Füll das Formular aus und wir melden uns innerhalb von 24 Stunden bei dir.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Dein Name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Deine E-Mail
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Erzähl uns von deinem Business
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Nachricht senden
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: Kontakt
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
    type: GenericSection
seo:
  metaTitle: Kontakt – The Bloom Way · Einsiedeln, Schweiz
  metaDescription: Kontaktiere The Bloom Way in Einsiedeln, Schweiz. Boutique Content & Talent Agentur für Talent Management, Content Creation und Social Media Management.
  socialImage: /images/tbw-22.jpeg
  type: Seo
type: PageLayout
---
