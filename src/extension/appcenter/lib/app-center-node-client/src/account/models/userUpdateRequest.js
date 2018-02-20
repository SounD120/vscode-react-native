/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a UserUpdateRequest.
 */
class UserUpdateRequest {
  /**
   * Create a UserUpdateRequest.
   * @member {string} [displayName] The full name of the user. Might for
   * example be first and last name
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserUpdateRequest
   *
   * @returns {object} metadata of UserUpdateRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserUpdateRequest',
      type: {
        name: 'Composite',
        className: 'UserUpdateRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserUpdateRequest;