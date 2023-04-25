require "test_helper"

class PurchaseMailerTest < ActionMailer::TestCase
  test "confirmation_message" do
    mail = PurchaseMailer.confirmation_message
    assert_equal "Confirmation message", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
