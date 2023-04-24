class EventMailer < ApplicationMailer

 
  def event_created(event, organizerEmail, organizerName)
    @event = event
    @organizerEmail = organizerEmail
    @organizerName = organizerName    
    mail(to: @organizerEmail, subject: "Your Event, #{@event} Has Been Successfully Created!")
  end
end
