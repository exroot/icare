import { BeatLoader } from 'react-spinners'
import 'twin.macro'
import useEarnings from '../../lib/dashboard/useEarnings'
import useProfileViews from '../../lib/dashboard/useProfileViews'

const Overview = () => {
  const { loading, data } = useProfileViews()
  const { loading: earningsLoading, data: earnings } = useEarnings()

  const getEarnings = () => `$${earnings?.tips?.tip_amount__sum || 0}`

  return (
    <div tw="p-5 bg-primary-800 rounded-xl shadow-sm text-white">
      <div tw="font-semibold text-white">Total Views</div>
      <div tw="flex items-center pt-1">
        {loading ? (
          <div tw="py-2">
            <BeatLoader color="var(--color-accent)" />
          </div>
        ) : (
          <div tw="text-2xl font-bold text-gray-200">
            {data?.page_views.current_period_count || 0}
          </div>
        )}

        {/* add in later if we want to get fancy */}
        {/* <ShowDiffPill /> */}
      </div>
    </div>
  )
}

export default Overview
