/**
 * @author https://github.com/acvetkov
 * @overview
 */

import _ from 'lodash';
import Build from './build/index';

export default class TeamcityApi {

    /**
     * Конструктор
     * @param {TeamcityApiOptions} options
     */
    constructor (options = {}) {
        this.options = _.defaults(options, {
            host: 'teamcity.domain.com',
            path: '/guestAuth/app/rest/',
            protocol: 'http://'
        });
        this.build = new Build(this.options);
    }
}
