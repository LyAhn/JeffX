const language = {
  loadevent: "プレイヤーイベントの読み込みが完了しました。",
  loadcmd: "コマンドの読み込みが完了しました。",
  ready: " 接続に成功しました。",
  loadslash: "スラッシュコマンドの再読み込みに成功しました。",
  error1:
    "プロジェクトに入力したBotのトークンが間違っているか、Botの特権インテントがオフになっています!",
  error2:
    "Botのトークンをtoken.js内またはプロジェクト内の.envファイルに入力してください!",
  loadclientevent: "クライアントイベントの読み込みが完了しました。",
  embed1:
    "このコマンドを使用するには、このサーバーに <@&{djRole}>(DJ) ロールが設定されている必要があります。このロールを持たないユーザは {cmdMAP} を使用できません。",
  message1: "⚠️ ボイスチャンネルに参加してください。",
  message2: "⚠️ このBotと同じボイスチャンネルに接続してください。",
  message3: "❌ 権限が不足しています。",
  msg4: "⚠️ 何らかのエラーが発生しました。",
  msg5: "❌ 現在再生中の楽曲はありません。",
  msg6: "楽曲を保存",
  msg7: "プレイリスト名を入力してください。",
  msg8: "この楽曲はライブストリーミングであり、使用できるデュレーションデータはありません。",
  msg9: "**✅ 成功:** 再生位置を更新しました。",
  msg10: "❌ この名前のプレイリストはまだありません。",
  msg11: "❌ この楽曲は既にこのプレイリストに入っています。",
  msg12: "楽曲をプレイリストに追加しました。",
  error3: "⚠️ スラッシュコマンドの再読み込み時にエラーが発生しました: ",
  error4:
    "⚠️ 警告: mongodbのurlを書いてないようです。config.jsファイルに有効なmongodbのURLを書かないと、Botを使用することができません。",
  msg13: `🎵 現在再生中： **{track?.title}** -> チャンネル: **{queue?.connection.channel.name}** 🎧`,
  msg14: "❌ キューが空です。",
  msg15: "❌ チャンネルに誰も参加していないので退出しました。",
  msg16:
    "❌ ボイスチャンネルに接続できませんでした。切断されたようです。",
  msg17: "❌ 前のトラックはありません！",
  msg18: "✅ 「**{queue.previousTracks[1].title}**」を再生中",
  msg19: " ボットの統計情報",
  msg20: "再読み込み",
  msg21: "**時間切れです！**",
  msg22: "**✅ データを更新しました。**",
  msg23: "❌ キューが空です。",
  msg24: "🗑️ キューの中身を削除しました。",
  msg26: "DJロールを指定しない場合は、このコマンドを使用することができません!",
  msg25: "DJロールが<@&{role}>に正常に設定されました。",
  msg27: "DJロールは正常に削除されました。",
  msg28: "DJロールは、まだ設定されていません。",
  msg29: `❌ 有効なフィルター名を入力してください。\n{filters}`,
  msg30: `❌ その名前のフィルターは見つかりませんでした。\n{filters}`,
  msg31: `選択されたフィルター: **{filter}**, フィルターのステータス: **{status}**\n **楽曲が長い場合、フィルターを適用させるために時間を要することがありますので、ご注意ください。**`,
  msg32:
    "完全無料かつ高度なインターフェイスで、あなたのdiscordサーバーで楽曲を聴くときが来たのです。多くのプラットフォームでの音楽再生をサポートする音楽ボットで、あなたのサーバーを特別な雰囲気にします。あなただけの音楽ボットを作りましょう！https://github.com/lyahn/JeffX",
  msg33: "Botのコマンド",
  msg34: "❌ 既にアクティブなコマンドがあります。",
  msg35: "キュー",
  msg36: "現在再生中の楽曲",
  msg37: "やめる",
  msg38: "ループ再生の設定",
  msg39: `> **以下からお選びください。**
   > **キュー:** キューをループ再生します。.
   > **現在再生中の楽曲:** 現在再生中の楽曲をループ再生します。
   > **やめる:** ループ再生をやめます。`,
  msg40: "キューをループします。",
  msg41: "⚠️ 何らかのエラーが発生しました。",
  msg42: "現在再生中の楽曲をループします。",
  msg43: "❌ ループ再生は、既に無効に設定されています。",
  msg44: `ループ再生をやめます。`,
  msg45: "タイムアウトしました。",
  msg46: "ループ再生の設定を終了しました。",
  msg47: "プレイリストに保存する",
  msg48: "✅ 楽曲の再生を一時停止しました。",
  msg49: `メッセージのPing`,
  msg50: `メッセージのLatency`,
  msg51: `APIのLatency`,
  msg52: `❌ プレイリストがありません。`,
  msg53: `❌ このプレイリストを再生する権限がありません。`,
  msg54: `❌ そのプレイリストにその名前の楽曲はありません。`,
  msg55: `❌ あなたが接続しているボイスチャンネルに接続できませんでした。`,
  msg56: `🔄️ プレイリストを読み込み中…`,
  msg57: `<@{interaction.member.id}>\n✅ **{music_filter.length}** 件の楽曲をキューに追加しました。`,
  msg58: `❌ この名前のプレイリストはありません。`,
  msg59: `❌ 検索したい楽曲の名前を書いてください。`,
  msg60: `❌ 見つかりませんでした！`,
  msg61: "🎧 楽曲を読み込んでいいます...",
  msg62: "という名前のリストがプレイリストに追加されました。✅",
  msg63: `❌ キューが空です。`,
  msg64: "キュー",
  msg65: "現在再生中の楽曲",
  msg66: "追加したユーザー：",
  msg67: "ページ",
  msg68: `✅コマンドプロセッサはキャンセルされました。`,
  msg69: `キューの表示を終了しました。`,
  msg70: `一定時間経過したため、キューの表示を終了しました。再度表示するには\`/queue\`を実行してください。`,
  msg71: `❌ エラーが発生しました。`,
  msg72: "✅ 楽曲の再生を再開しました。",
  msg73: `❌ 有効な曲名を入力してください。`,
  msg74: `❌ 検索結果が見つかりませんでした！`,
  msg75: "検索結果",
  msg76: "**1** から **{maxTracks.length}** の中から、キューに追加する楽曲を選んでください ⬇️",
  msg77: `✅ 楽曲検索がキャンセルされました。`,
  msg78: `🎧 読み込み中...`,
  msg79: "✅ キューに楽曲を追加しました。",
  msg80: `❌ 一定時間経過したため、検索結果の表示を終了しました。`,
  msg81: "キャンセル",
  msg82: `❌ 入力された数字が、キュー内の曲数より多いです。数値を確認してください。`,
  msg83: "✅ 楽曲をスキップしました。",
  msg84: `🎧 この楽曲はライブストリーミングであり、使用できる長さのデータはありません。`,
  msg85: `✅ 再生を停止しました。`,
  msg86: "更新",
  msg87: `現在の音量: **{queue.volume}** 🔊\n**音量を変えるには、\`1\` から \`{maxVol}\` の間の数字を入力してください。**`,
  msg88: `❌ 既にその音量で再生しています。`,
  msg89: `❌ **音量を変えるには、\`1\` から \`{maxVol}\` の間の数字を入力してください。**`,
  msg90: "音量が変更されました:",
  msg91: `❌ 作成したいプレイリストの名前を入力してください。`,
  msg92: `❌ この名前のプレイリストは既に存在しています。`,
  msg93: `❌ 30個以上プレイリストを所有することが出来ません。`,
  msg94: "🎧 プレイリストを作成中...",
  msg95: "🎧 プレイリストを作成しました！",
  msg96: `❌ この名前のプレイリストはまだありません。`,
  msg97: "🎧 プレイリストを削除しています...",
  msg98: "🎧 プレイリストを削除しました！",
  msg99: `❌ 検索したいトラックの名前を書いてください。`,
  msg100: `❌ 楽曲を追加したいプレイリストの名前を書いてください。`,
  msg101: `❌ プレイリストに {max_music} 件以上の楽曲を入れることはできません。`,
  msg102: "🎧 楽曲を読み込み中...",
  msg103: "🎧 すべての楽曲がプレイリストに追加されます！",
  msg104: `❌ この楽曲は、既にこのプレイリストに含まれています。`,
  msg105: "🎧 プレイリストに追加しました!",
  msg106: `❌ 楽曲を削除したいプレイリストの名前を書いてください。`,
  msg107: `❌ この名前の楽曲はありません。`,
  msg108: "🎧 楽曲を削除しています...",
  msg109: "🎧 楽曲を削除しました！",
  msg110: "❌ 検索したいプレイリストの名前を書いてください。",
  msg111: `❌ このプレイリストには、楽曲がありません。`,
  msg112: "トップ公開プレイリスト",
  msg113: `一定時間経過したため、トップ公開プレイリストの表示を終了しました。再度表示するには\`/playlist top\`を実行してください。`,
  msg114: `❌ 再生されたことのある公開プレイリストがありません。`,
  msg115: "あなたのプレイリスト",
  msg116: `件の楽曲`,
  msg117: `❌ あなたはプレイリストを所有していません。`,
  msg118:
    "一定時間経過したため、プレイリストの表示を終了しました。再度使用するには `/playlist list {プレイリスト名}` を実行してください。",
  msg119:
    "これらのプレイリストを聴くには、**/play playlist <プレイリスト名>**コマンドを実行してください。\n楽曲をリストで見るには、**/playlist list <プレイリスト名>**を実行してください。",
  msg120: "テキストチャンネルを指定してください。",
  msg121:
    "<#{channel}> をコマンド使用チャンネルに追加しました。これにより、それ以外のチャンネルではコマンドが使用できなくなりました。",
  msg122: "既に登録されているデータはありません。",
  msg123: "<#{channel}> をコマンド使用チャンネルから削除しました。",
  msg124: "このチャンネルは、すでにコマンド使用チャンネルに登録されています。",
  msg125: "このチャンネルは、テキストチャンネルではありません。",
  msg126:
    "❌ このサーバーでコマンド可能なチャンネルの一覧です： {channel_filter}",
  msg127: "コマンドは定義されていません。",
  error7:
    "このコマンドは後でもう一度試してください。Bot開発者に報告されたバグの可能性があります。",
  msg128:
    "楽曲再生中にミュートされたため、楽曲の再生を停止しました。再生を再開するには、Botのミュートを解除してください。",
  msg129: "再生",
  msg130: "有効な番号を入力してください。",
  msg131: "このコマンドを実行するためには、Botに投票する必要があります。",
  msg132: "❌ 一時停止している楽曲はありません。",
  msg133: "🔀　キューの中身をシャッフルしました。",
  msg134: "誤った入力形式です。 正しい例: `5:50` | `1:12:43`",
  msg135: "再生時間を {queue.formattedCurrentTime} に正常に設定しました。",
  msg136: "自動再生を有効にしました。",
  msg137: "自動再生を無効にしました。",
};
module.exports = language;