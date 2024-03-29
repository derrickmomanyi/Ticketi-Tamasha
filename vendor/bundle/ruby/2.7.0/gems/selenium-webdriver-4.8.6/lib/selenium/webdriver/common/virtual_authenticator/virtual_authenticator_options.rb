# frozen_string_literal: true

# Licensed to the Software Freedom Conservancy (SFC) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The SFC licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

#
# Options for the creation of virtual authenticators.
# @see http://w3c.github.io/webauthn/#sctn-automation
#

module Selenium
  module WebDriver
    class VirtualAuthenticatorOptions
      PROTOCOL = {ctap2: 'ctap2', u2f: 'ctap1/u2f'}.freeze
      TRANSPORT = {ble: 'ble', usb: 'usb', nfc: 'nfc', internal: 'internal'}.freeze

      attr_accessor :protocol, :transport, :resident_key, :user_verification, :user_consenting, :user_verified
      alias resident_key? resident_key
      alias user_verification? user_verification
      alias user_consenting? user_consenting
      alias user_verified? user_verified

      def initialize(**opts)
        @protocol = opts.delete(:protocol) { :ctap2 }
        @transport = opts.delete(:transport) { :usb }
        @resident_key = opts.delete(:resident_key) { false }
        @user_verification = opts.delete(:user_verification) { false }
        @user_consenting = opts.delete(:user_consenting) { true }
        @user_verified = opts.delete(:user_verified) { false }

        raise ArgumentError, "Invalid arguments: #{opts.keys}" unless opts.empty?
      end

      #
      # @api private
      #

      def as_json(*)
        {'protocol' => PROTOCOL[protocol],
         'transport' => TRANSPORT[transport],
         'hasResidentKey' => resident_key?,
         'hasUserVerification' => user_verification?,
         'isUserConsenting' => user_consenting?,
         'isUserVerified' => user_verified?}
      end
    end # VirtualAuthenticatorOptions
  end # WebDriver
end # Selenium
