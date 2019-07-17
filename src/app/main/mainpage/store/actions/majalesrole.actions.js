import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';

export const GET_BOARD = '[SCRUMBOARD APP] GET BOARD';
export const DELETE_BOARD = '[SCRUMBOARD APP] DELETE BOARD';
export const COPY_BOARD = '[SCRUMBOARD APP] COPY BOARD';
export const RENAME_BOARD = '[SCRUMBOARD APP] RENAME BOARD';
export const CHANGE_BOARD_SETTINGS = '[SCRUMBOARD APP] CHANGE BOARD SETTINGS';
export const RESET_BOARD = '[SCRUMBOARD APP] RESET BOARD';
export const ORDER_LIST = '[SCRUMBOARD APP] ORDER LIST';
export const ORDER_CARD = '[SCRUMBOARD APP] ORDER CARD';
export const ADD_CARD = '[SCRUMBOARD APP] ADD CARD';
export const ADD_LIST = '[SCRUMBOARD APP] ADD LIST';
export const ADD_LABEL = '[SCRUMBOARD APP] ADD LABEL';
export const RENAME_LIST = '[SCRUMBOARD APP] RENAME LIST';
export const REMOVE_LIST = '[SCRUMBOARD APP] REMOVE LIST';







