---
title: Contact
slug: /en/contact
sections:
  - title:
      text: Let's talk
      color: text-dark
      type: TitleBlock
    subtitle: Initial consultation for your SME
    text: |-
      Fill out the form and we will get back to you within 24 hours.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Tell us about your business
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
        label: Send message
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: Contact
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
  metaTitle: Contact – The Bloom Way · Einsiedeln, Switzerland
  metaDescription: Contact The Bloom Way in Einsiedeln, Switzerland. Boutique content and talent agency for Talent Management, Content Creation and Social Media Management.
  socialImage: /images/tbw-22.jpeg
  type: Seo
type: PageLayout
---
