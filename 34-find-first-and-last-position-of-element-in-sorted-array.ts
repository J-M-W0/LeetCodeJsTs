function searchRange(nums: number[], target: number): number[] {
    
    const findFirstPosition = (nums: number[], target: number): number => {
        let left = 0, right = nums.length - 1, index = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;     // record the potential first position
                right = mid - 1; // try to find a smaller index
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    const findLastPosition = (nums: number[], target: number): number => {
        let left = 0, right = nums.length - 1, index = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;    // record the potential last position
                left = mid + 1; // try to find a greater index
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    let firstPos = findFirstPosition(nums, target);
    let lastPos = (firstPos === -1) ? -1 : findLastPosition(nums, target);
    return [firstPos, lastPos];
}


const searchRange2 = (nums: number[], target: number): number[] => {

    const binarySearch = (l: number, r: number): number => {
        if (l > r) {
            return -1;
        }

        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            return binarySearch(mid + 1, r);
        } else if (nums[mid] > target) {
            return binarySearch(l, mid - 1);
        } else {
            return mid;
        }
    };

    let index1 = binarySearch(0, nums.length - 1);
    if (index1 === -1) {
        return [-1, -1];
    } else {
        if (index1 > 0 && nums[index1 - 1] === nums[index1]) {
            return [index1 - 1, index1];
        }
        if (index1 < nums.length - 1 && nums[index1 + 1] === nums[index1]) {
            return [index1, index1 + 1];
        }
        return [index1 , index1];
    }
}
