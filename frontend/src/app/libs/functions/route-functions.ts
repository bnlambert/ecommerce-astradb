import { actions } from '../constants/route-constants';

export function setRouteActions(params: any) {
  return {
    isList: !params.action,
    isCreate: params.action === actions.CREATE,
    isUpdate: params.action === actions.UPDATE && params.slug !== undefined,
    isDetail: (params.action === actions.DETAIL && params.slug !== undefined) || params.chapter_slug !== undefined
  };
}
