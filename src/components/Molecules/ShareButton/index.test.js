import {getShareUrl} from './index'

describe('ShareButton', () => {
  it('Twitter用のシェアリンクを生成', () => {
    const shareUrl = getShareUrl('twitter', 'progate.com')
    expect(shareUrl).toBe(
      'https://twitter.com/intent/tweet?url=progate.com&hashtags=Progate,progate_journey&text=今日学んだことを共有しよう！'
    )
  })
  it('Facebook用のシェアリンクを生成', () => {
    const shareUrl = getShareUrl('facebook', 'progate.com')
    expect(shareUrl).toBe('https://www.facebook.com/share.php?u=progate.com')
  })
  it('Linkedin用のシェアリンクを生成', () => {
    const shareUrl = getShareUrl('linkedin', 'progate.com')
    expect(shareUrl).toBe(
      'https://www.linkedin.com/sharing/share-offsite/?url=progate.com'
    )
  })
})
