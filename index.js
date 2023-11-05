/** @format */

import { XernerxShardClient } from 'xernerx';
import config from './data/config/config.js';

new XernerxShardClient('./main.js', { token: config.token, totalShards: 2 }, { timeout: 10000, log: true });
