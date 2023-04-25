class PurchaseMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.purchase_mailer.confirmation_message.subject
  #
  def confirmation_message(eventTitle, customerEmail, customerUsername, earlyBirdTicket, advanceTicket, vipTicket, eventAmount, eventDressCode, eventTime, eventDate)
    @eventTitle = eventTitle
    @customerEmail = customerEmail
    @customerUsername = customerUsername
    @earlyBirdTicket = earlyBirdTicket
    @advanceTicket = advanceTicket
    @vipTicket = vipTicket
    @eventAmount = eventAmount
    @eventDressCode = eventDressCode
    @eventTime = eventTime
    @eventDate = eventDate

    mail(to: @customerEmail, subject: "Your payment for #{@event} of #{@eventAmount} shillings Has Been Received")
  end
end
