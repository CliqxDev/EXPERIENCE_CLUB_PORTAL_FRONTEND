import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useMediaById, usePostById } from 'hook/selectors/postHooks';
import { useAppDispatch } from 'hook/store';
import { mediaById, postById } from 'flux/modules/post/actions';
import { RequestStatus } from 'models/iRequest';
import { PostItem } from 'flux/modules/post/types';
import * as S from './styles';

const Post = () => {
  const dispatch = useAppDispatch();
  const { data: post, status: statusPost } = usePostById();
  const { id }: any = useParams();
  const { data: dataMedia } = useMediaById();

  const [postSelected, setPostSelected] = useState<PostItem>();
  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(postById.request(id));
  }, []);

  useEffect(() => {
    if (statusPost === RequestStatus.success) {
      if (!isEmpty(post) && !image) {
        setPostSelected(post);
        dispatch(mediaById.request(post.featured_media));
      }
    }
  }, [post, statusPost]);

  useEffect(() => {
    if (dataMedia && postSelected) {
      setImage(
        dataMedia[postSelected.featured_media].media_details.sizes[
          'independent-team-medium'
        ].source_url
      );
    }
  }, [dataMedia, postSelected]);

  return (
    <S.Wrapper>
      <S.Gradient />

      {!isEmpty(postSelected) && (
        <>
          <S.Header>
            <S.HeaderAction>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2811_28035)">
                  <mask
                    id="mask0_2811_28035"
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                  >
                    <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2811_28035)">
                    <path
                      d="M28 33.6534L18.3462 23.9995L28 14.3457L29.4192 15.7649L21.1846 23.9995L29.4192 32.2342L28 33.6534Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2811_28035">
                    <rect y="4" width="48" height="40" rx="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </S.HeaderAction>
            <svg
              width="69"
              height="48"
              viewBox="0 0 69 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="68.7838" height="48" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_2811_28034"
                    transform="scale(0.0075188 0.0107744)"
                  />
                </pattern>
                <image
                  id="image0_2811_28034"
                  width="299"
                  height="135"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACHCAYAAABODX+VAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAzjaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTAtMDFUMTI6Mjc6MTAtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTEwLTE0VDE3OjIxOjMxLTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTE0VDE3OjIxOjMxLTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjNhZWVlNzMtY2U2NS00MzVkLWI4YTEtNWVmYWVjZmQ3ZTA3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGQyODdiYzgtZDQxZC0wMTQyLWFkNjMtZmYxYTZkZmE0ODI2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2YxNDI4M2QtNDViMy00MmY3LWE0NTEtNmUxNzQ2MWU5YWVhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjE0MjgzZC00NWIzLTQyZjctYTQ1MS02ZTE3NDYxZTlhZWEiIHN0RXZ0OndoZW49IjIwMjEtMTAtMDFUMTI6Mjc6MTAtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozODgzYTlkZi04ZDQ0LTQxOGQtYmViMC04NWMwM2U4YjkxZDUiIHN0RXZ0OndoZW49IjIwMjEtMTAtMDFUMTI6MzA6MDEtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZmMyYmE1My1hODRlLTQ4NmMtYjM1NC1iYThjYjk2NmE3NDUiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTNUMTc6MjE6MTAtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZGVhZGRhNS1mZTRmLTQzODEtOTkyMy1mZTkxYjNhNjkwZWYiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTNUMTc6MjE6MTAtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NjBjNjYwZC00NjlkLTQwMTQtYmZhYi0wNTE1MDZlZmNkZTkiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTNUMTc6MjU6MzktMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzhkYWYzMi1lY2Y4LTQ0OWYtYTZkNS1iZDdkYTdmODFmMmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTNUMTc6MjU6MzktMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyM2FlZWU3My1jZTY1LTQzNWQtYjhhMS01ZWZhZWNmZDdlMDciIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6MjE6MzEtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NjBjNjYwZC00NjlkLTQwMTQtYmZhYi0wNTE1MDZlZmNkZTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MmRlYWRkYTUtZmU0Zi00MzgxLTk5MjMtZmU5MWIzYTY5MGVmIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2YxNDI4M2QtNDViMy00MmY3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vxnYJnPg6r6DyNzLbr70UGSnNAwUkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVawH7cRETlYOrISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVZQshKRVlCyEpFWULISkVa4DPSASU29ETAHzoFOVjYGZl69KdDNnk+y+sPsETLP6i1Mma2fL7dKN4ulB1zNym5k842BJDDPrKK9BW49/DpV85Atb1RTJ6RpuyNgULGsgSlLTN1Y+wlu+0wD07pe+YBwP0J5e02yNn15DHOKGHvE97uq2FYxyZYTk8czpFiHBcv7ax+3L8FmfRurn5uaeSbEY4+1PyT8v1PVVq5vntv6th1rlv2dBuIgm3+UtXuWld3BxT1ieX+aUW1Omqb9tF4/TVPSNB2ZskWapp2svGrauEH7Q9OOrd835aHHIE3TpKLdJKvjz9eEjanJPLOaWGOPpu120vK62vWqmlZnnpa3Y2ibjSrit3WTQFs2BttHTfa7RZqmvYpl1z1mNe3bvl1E1rdqWh2/b+uMV4g9TZf3udj/TpO2Yv02T8N9G4o5tv/4QvtJnellL3vdDGQ8TNkE967yYJYtx1mW7FK884DL7qF28vY7FEdBAE9kmXVRk12tPvB0oH1M21eyOvcTfne4Y8qbxmTnsUJlq6hrN8H1a77OU1y/J9nzK1n5M4SPbmz7D5ryq1m7E1M29OYdUX/0TRbDlOLIo6lblPu5l7V1htsGfTbr36Z9ez17Pcb14SJ7nh8Z3CDcD7b9HsW2uIrru3HDeBaBsny5uQe956NITDE36quUXMXFP25Yfww8Zl7n62rjrtpPYn0z89/hbDaOPbpp+V2872XiSUWWte130/I71qCmvv+w886z9mzbczPdfweKlfsxDRvMs+lj1XbPzTznWb/lqt6x/PYnkWm2PSu2LULvooO0Pga73/nvzh1vPReRZdc98v2yad/6fWJjTNLyPlbVt+PItFj9qtjTmr45jyzXbq9YW02WnetF1t1uu543zzgt9sdOWh59pWn4KDXaN+ucYF9QzrLXTda8RfMMvKA81u2tEMOA4t3uFu6dd+G13c+mkcXXbxjTzLzurhDTRRni3n0AHqLch0Pi55Z8k4r2czcj5XWmFOc215Fky8u339mKy1/XmPI+c92btlihnV1JKG+7zg6XZU0bLGtsnr+H8jnjBBf347g+fifhEUCUPwwcsvxPvWD5BNqEYjjoz5/QTIfyDjhrOB+UE9sksswE1xmPZq/7DZbRp7z+80CdLuGdccpqw9im7fplCeXhYN3wL2YYieEh83oAfDx7fo3wiVHrcdwQYN3hoJXgtu27s9d91j/h3qXZNksoDwdzseFfzGjNeEJldfMuGsxTt4xpRTvP4PaJfDg4qmi7Z55PKpYfiiHXjUwf+4fjIbHDsq5X7zxSzx6azrP2/MPMJA2fkLeHsvZx3qCOv27TdPmQMzHxLLyYFl5bdariqHrUic137tXrROrl7Lom3rzDdLnv8/6yy7GH7aHtS1oefuft5uy+ZLeNHUrEtl90eFDx8PczX5P9K02Xh3+r7EfjQP2YWOx52/PAPHYdxpHyVfvB1u+ky6d97LqE1s//39nK/8Em91n1Aq87NfNcxR2N+UdkI5ofka2rGyi7QhHPmSm/yWZHBbvWYfkI2H/ts+t6xZT/DsURy9CUT72/0OzWDNvGhO0NpRdbaqdOh+V9u18zT9V+NNlCTHnb9gLQHeBHWW1Eso6E5f2is+NlBvnDwHeyPPRJAvN1WD4kt1cHY/yrjQvcxvSXWWdOMVzpEd9gA28en73y0KXY0cYVMd0kvI6xGJqKtRsypZxw8rIu8aTvX2VJKN+rM6D8jzYOtHFG/XB6zvJwcF0983yxQTuxvp0HysaU+wGK+8eSSPuhK1hT4uu+yraG4gpehyJhVbVf5TsCZfOaec4phoP5/3nIrWz6GW5fXKweXkXfpKtfDfQPk/1hhd9G7NA09mhSf2DqLNLwEMg/fB2my4ecdmgxNOXTQHuhebbxWLVdu+5JWn0ldpX27Tat4veN3V62fB6Y18Zg97txIJ5OWh5SNd037SPvm6Z9a2Py+/Y8UD+0Xtva1nbZtk8SE1/Hm8duC9tfobbWWbbdHjm77ew+FOovUvd/lmTzdVfpm3WGgQOKo5o72euxmT5l94eJ5xRXquy9OLl+VpYffdyi/l1oSnEl6BqbD1/6bL8fOpTXY0z56uCjNLvqGWrXnlh/PPDIXaPZeg3XiCPXxW0/e3/TzEzvNYxhFR2W+3ZA+crrYMvLXFVCcRHlChdzhdQuu255I8r9dU7xf9TD9ekTuNgfY9UhcrraHew2s6dp+X4am40npjyW7WMPWz+GdPmejibx12Vxu+xpZJ4Y29Y0K1uk9eu7Trt++ciUL9LwXdNV7+ajBvXmps4oDfdZ3ba0bdv9bpEWJ5Fn3jyJtz7TSHno4bfls/FMIuWDilhC9TfZ1uNI7LaNrin39y/b33afr+sHfxmxZfv95Mcc2uYxSVq+d6vObNUjqynxS+VDNn+HX8UcN/6+VVFn1ZOQE/N8wPrv3v3sbz5234Y+7qgG3HoNzbQJxXmNqnMKMSPzfBqpM4nUrzKm2R3TZxQnke3Fl2dw78iJKetmf6+w3b591LwemefnWRz5MqdbWua6FpS39fCClz+m+n9ujDv3faeiTj4im6+w3MVl3I5Qt0MluB2jY+oO/cYoPhRKFsyMcucmTYJqEE9uhtuZh9nyurgNeDObNiF8ki9vf+6VJ7ghTz973adIyHUx2baGuHt1bkSWH4qlrt2hqTsNtDuk+EfqUZzgjK1rLq+Xt3ceqXdOeZvb+arWwcZlY0gi8y2yejPCMY8oPgoTmm41nT4wsZwH5htS9EuH5n3rq9vWi0BsIWOKN6SeN3/of62qrZCq+gmuP/LlLwJ1JhT7S5/iI0g3KC7qJN48dX0zu5SmaU0dWVOKO/Kb7TmOY5RQvBnKiVCy2p0++mfalT7q25Pzf38P68wSl5sQAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>

            <S.HeaderAction>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2811_27950)">
                  <mask
                    id="mask0_2811_27950"
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                  >
                    <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2811_27950)">
                    <path
                      d="M31.6 33L25.3 26.7C24.8 27.1 24.225 27.4167 23.575 27.65C22.925 27.8833 22.2333 28 21.5 28C19.6833 28 18.1458 27.3708 16.8875 26.1125C15.6292 24.8542 15 23.3167 15 21.5C15 19.6833 15.6292 18.1458 16.8875 16.8875C18.1458 15.6292 19.6833 15 21.5 15C23.3167 15 24.8542 15.6292 26.1125 16.8875C27.3708 18.1458 28 19.6833 28 21.5C28 22.2333 27.8833 22.925 27.65 23.575C27.4167 24.225 27.1 24.8 26.7 25.3L33 31.6L31.6 33ZM21.5 26C22.75 26 23.8125 25.5625 24.6875 24.6875C25.5625 23.8125 26 22.75 26 21.5C26 20.25 25.5625 19.1875 24.6875 18.3125C23.8125 17.4375 22.75 17 21.5 17C20.25 17 19.1875 17.4375 18.3125 18.3125C17.4375 19.1875 17 20.25 17 21.5C17 22.75 17.4375 23.8125 18.3125 24.6875C19.1875 25.5625 20.25 26 21.5 26Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2811_27950">
                    <rect y="4" width="48" height="40" rx="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2811_27991)">
                  <mask
                    id="mask0_2811_27991"
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                  >
                    <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2811_27991)">
                    <path
                      d="M15 30V28H33V30H15ZM15 25V23H33V25H15ZM15 20V18H33V20H15Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2811_27991">
                    <rect y="4" width="48" height="40" rx="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </S.HeaderAction>
          </S.Header>
          {dataMedia && (
            <S.ImageWrapper>
              <img src={image} alt="card imagem" />
            </S.ImageWrapper>
          )}
        </>
      )}
    </S.Wrapper>
  );
};
export default Post;
