# frozen_string_literal: true

module ActiveJob
  module Translation # :nodoc:
    extend ActiveSupport::Concern

    included do
      around_perform do |job, block|
        I18n.with_locale(job.locale, &block)
      end
    end
  end
end
