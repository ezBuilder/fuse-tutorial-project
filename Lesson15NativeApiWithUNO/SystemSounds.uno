using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;

using iOS.AudioToolbox;

using Android.android.media;
using Android.android.app;

public class SystemSounds :NativeModule
{
	public SystemSounds(){


		AddMember(new NativeFunction("playNotification",
		 (NativeCallback)PlayNotification));
	}
	object PlayNotification(Context c, object[] args){

		if defined(iOS){

				Functions.AudioServicesPlaySystemSound(1310);
		}else if defined(Android){
			var uri=RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
			var ringtone=RingtoneManager.getRingtone(Activity.GetAppActivity(), uri);
			ringtone.play();
		}
		debug_log("notification played!");
		return null;
	}
}
